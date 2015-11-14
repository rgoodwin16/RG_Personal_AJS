namespace RG_Personal.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Configuration;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<RG_Personal.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(RG_Personal.Models.ApplicationDbContext context)
        {
            //Create Admin Role
            var roleManager = new RoleManager<IdentityRole>(
                new RoleStore<IdentityRole>(context));

            if(!context.Roles.Any(r=> r.Name == "Admin"))
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
            }

            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            var adminEmail = ConfigurationManager.AppSettings["AdminEmail"];

            if(!context.Users.Any(u=> u.Email == adminEmail))
            {
                userManager.Create(new ApplicationUser
                {
                    UserName = ConfigurationManager.AppSettings["AdminEmail"],
                    Email = ConfigurationManager.AppSettings["AdminEmail"],
                    FirstName = ConfigurationManager.AppSettings["AdminFirstName"],
                    LastName = ConfigurationManager.AppSettings["AdminLastName"],
                    DisplayName = ConfigurationManager.AppSettings["AdminDisplayName"],
                }, ConfigurationManager.AppSettings["AdminPassword"]);
            }

            var userId = userManager.FindByEmail(adminEmail).Id;
            userManager.AddToRole(userId, "Admin");

            //Create Moderator Role
            var roleManager2 = new RoleManager<IdentityRole>(
                new RoleStore<IdentityRole>(context));

            if(!context.Roles.Any(r=> r.Name == "Moderator"))
            {
                roleManager2.Create(new IdentityRole { Name = "Moderator" });
            }

            var userManager2 = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            var moderatorEmail = ConfigurationManager.AppSettings["ModeratorEmail"];

            if(!context.Users.Any(u=> u.Email == moderatorEmail))
            {
                userManager2.Create(new ApplicationUser
                {
                    UserName = ConfigurationManager.AppSettings["ModeratorEmail"],
                    Email = ConfigurationManager.AppSettings["ModeratorEmail"],
                    DisplayName = ConfigurationManager.AppSettings["ModeratorDisplayName"]
                }, ConfigurationManager.AppSettings["ModeratorPassword"]);
            }

            var userId2 = userManager2.FindByEmail(moderatorEmail).Id;
            userManager2.AddToRole(userId2, "Moderator");
        }
    }
}
