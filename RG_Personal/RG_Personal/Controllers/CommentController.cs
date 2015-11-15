using RG_Personal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;

namespace RG_Personal.Controllers
{
    [Models.Authorize]
    [RoutePrefix("api/Comments")]
    public class CommentController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();


        //POST: api/Comments/Index - GET ALL COMMENTS FOR THIS BLOGPOST
        [AllowAnonymous]
        [HttpPost,Route("Index")]
        public IHttpActionResult Index(int id)
        {
            try
            {
                var comments = db.Comments.Where(c => c.PostId == id);
                return Ok(comments);
            }
            catch (NullReferenceException)
            {
                return Ok("No comments.");
            }
        }

        //POST: api/Comments/Create - CREATE NEW COMMENT FOR THIS BLOGPOST
        [Models.Authorize]
        [HttpPost,Route("Create")]
        public async Task<IHttpActionResult> Create(Comment model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = db.Users.Find(User.Identity.GetUserId());

            model.AuthorId = user.Id;
            model.Created = DateTimeOffset.UtcNow;

            db.Comments.Add(model);
            await db.SaveChangesAsync();

            return Ok();
        }

        //POST: api/Comments/Details/5 - GET DETAILS OF THIS COMMENT
        [Models.Authorize]
        [HttpPost, Route("Details")]
        public async Task<IHttpActionResult> Details(int id)
        {
            var comment = await db.Comments.FindAsync(id);
            if(comment == null)
            {
                return NotFound();
            }

            return Ok(comment);
        }

        //POST: api/Comment/Edit/5 - EDIT COMMENT
        [Models.Authorize(Roles=("Admin,Moderator"))]
        [HttpPost,Route("Edit")]
        public async Task<IHttpActionResult> Edit (Comment model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var oldComment = db.Comments.AsNoTracking().FirstOrDefault(c => c.Id == model.Id);

            if (oldComment.Body != model.Body)
            {
                oldComment.Body = model.Body;
                oldComment.Updated = DateTimeOffset.UtcNow;
                await db.SaveChangesAsync();
            }

            return Ok();
        }

        //POST: api/Comment/Delete - DELETE COMMENT
        [Models.Authorize(Roles =("Admin,Moderator"))]
        [HttpPost,Route("Delete")]
        public async Task<IHttpActionResult> Delete(int id)
        {
            var comment = await db.Comments.FindAsync(id);
            if(comment == null)
            {
                return BadRequest("No comment found.");
            }

            db.Comments.Remove(comment);
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
