using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RG_Personal.Models;

namespace RG_Personal.Controllers
{
    [RoutePrefix("Contact")]
    public class ContactController : ApiController
    {
        [Route("Send")]
        public IHttpActionResult Send(ContactMessage model)
        {
            if (!ModelState.IsValid)
            {
                if (model.Email == null)
                {
                    return BadRequest("Please enter a valid email address.");
                }
            }

            var mailer = new EmailService();
            var 
        }
    }
}
