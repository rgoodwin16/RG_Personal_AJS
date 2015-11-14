using RG_Personal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Security;

namespace RG_Personal.Controllers
{
    [RoutePrefix("api/Blog")]
    public class BlogController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        //POST: api/Blog - GET ALL BLOGPOSTS
        [HttpPost,Route("Index")]
        public IHttpActionResult Index()
        {
            try
            {
                var posts = db.Posts.ToList();
                return Ok(posts);
            }
            catch (NullReferenceException)
            {
                return BadRequest("No Posts found.");
            }
        }

        //POST: api/Blog/Create - CREATE NEW BLOGPOST
        [Models.Authorize(Roles = "Admin")]
        [ResponseType(typeof(Blogpost))]
        [HttpPost,Route("Create")]
        public async Task<IHttpActionResult> Create (Blogpost model)
        {
            var cats = db.Categories;

            if(!cats.Any(c=> c.Name == model.Category.Name))
            {
                var newCat = new Category()
                {
                    Name = model.Category.Name
                };

                db.Categories.Add(newCat);
                await db.SaveChangesAsync();
                model.Category.Id = newCat.Id;
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var slug = StringUtilities.UrlFriendly(model.Title);

            if (String.IsNullOrWhiteSpace(slug))
            {
                ModelState.AddModelError("Title", "Invalid Title");
                return BadRequest(ModelState);
            }

            if(db.Posts.Any(p=> p.Slug == slug))
            {
                ModelState.AddModelError("Title", "The title must be unique.");
                return BadRequest(ModelState);
            }
            else
            {
                model.Slug = slug;
                model.Created = DateTimeOffset.UtcNow;
                model.CategoryId = model.Category.Id;
                model.Category = null;
                db.Posts.Add(model);
                await db.SaveChangesAsync();

                return Ok();
            }

            
        }
    }
}
