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
using System.Data.Entity;

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

            if(!cats.Any(c=> c.Name == model.Category.Name) || cats == null)
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

        //POST: api/Blog/Edit/5 - EDIT BLOGPOST
        [Models.Authorize(Roles = "Admin")]
        [HttpPost,Route("Edit")]
        public async Task<IHttpActionResult> Edit (Blogpost model)
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
            else
            {
                model.Category.Id = model.Category.Id;
                model.Category = null;
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            model.Updated = DateTimeOffset.UtcNow;
            db.Entry(model).State = EntityState.Modified;
            await db.SaveChangesAsync();

            return Ok();
        }

        //POST: api/Blog/Delete/5 - DELETE BLOGSPOT
        [Models.Authorize(Roles ="Admin")]
        [HttpPost,Route("Delete")]
        public async Task<IHttpActionResult> Delete(int id)
        {
            Blogpost post = await db.Posts.FindAsync(id);
            if(post == null)
            {
                return BadRequest("No post found.");
            }

            db.Posts.Remove(post);
            await db.SaveChangesAsync();

            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
