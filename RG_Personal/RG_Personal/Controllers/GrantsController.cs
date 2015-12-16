using RG_Personal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RG_Personal.Controllers
{
    [RoutePrefix("api/Images")]
    public class GrantsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpPost,Route("List")]
        public IHttpActionResult Index()
        {
            var grants = db.Grants.ToList();
            if(grants == null)
            {
                return BadRequest("No grants found.");
            }
            return Ok(grants);
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
