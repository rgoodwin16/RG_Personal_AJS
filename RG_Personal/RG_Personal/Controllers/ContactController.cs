using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RG_Personal.Models;
using Microsoft.AspNet.Identity;
using System.Configuration;

namespace RG_Personal.Controllers
{
    [RoutePrefix("api/Contact")]
    public class ContactController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpPost,Route("Send")]
        public IHttpActionResult Send(ContactMessage model)
        {
            if (String.IsNullOrWhiteSpace(model.Email))
            {
                return BadRequest("You must enter an email address");
            }

            var emailer = new EmailService();
            var mail = new IdentityMessage()
            {
                Subject = model.Subject,
                Destination = ConfigurationManager.AppSettings["ContactMeEmail"],
                Body = "You have recieved a new email from: " + model.Name + " (" + model.Email + ") with the following message: " + model.Message
            };

            emailer.SendAsync(mail);
            return Ok("Your message has been sent.");
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
