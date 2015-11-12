﻿using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using RG_Personal.Models;
using System.Configuration;
using SendGrid;
using System.Net.Mail;
using System.Net;

namespace RG_Personal
{
    // Configure the application user manager used in this application. UserManager is defined in ASP.NET Identity and is used by the application.

    public class EmailService : IIdentityMessageService
    {
        public Task SendAsync(IdentityMessage message)
        {
            // Plug in your email service here to send an email

            //SendGrid Credentials.
            var username = ConfigurationManager.AppSettings["SendGridUsername"];
            var password = ConfigurationManager.AppSettings["SendGridPassword"];
            var from = ConfigurationManager.AppSettings["FromNoReply"];

            SendGridMessage myMessage = new SendGridMessage();

            myMessage.AddTo(message.Destination);
            myMessage.From = new MailAddress(from);
            myMessage.Subject = message.Subject;
            // myMessage.Text = message.Body;
            myMessage.Html = message.Body;

            //Create credentials, specifying your user name and password.
            var credentials = new NetworkCredential(username, password);

            // Create a Web transport for sending email.
            var transportWeb = new Web(credentials);

            // Send the email.
            return transportWeb.DeliverAsync(myMessage);
        }
    }

    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store)
            : base(store)
        {
        }

        public static ApplicationUserManager Create(IdentityFactoryOptions<ApplicationUserManager> options, IOwinContext context)
        {
            var manager = new ApplicationUserManager(new UserStore<ApplicationUser>(context.Get<ApplicationDbContext>()));
            // Configure validation logic for usernames
            manager.UserValidator = new UserValidator<ApplicationUser>(manager)
            {
                AllowOnlyAlphanumericUserNames = false,
                RequireUniqueEmail = true
            };
            // Configure validation logic for passwords
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 6,
                RequireNonLetterOrDigit = true,
                RequireDigit = true,
                RequireLowercase = true,
                RequireUppercase = true,
            };
            var dataProtectionProvider = options.DataProtectionProvider;
            if (dataProtectionProvider != null)
            {
                manager.UserTokenProvider = new DataProtectorTokenProvider<ApplicationUser>(dataProtectionProvider.Create("ASP.NET Identity"));
            }
            return manager;
        }
    }
}
