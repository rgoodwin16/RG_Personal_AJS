﻿using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace RG_Personal.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DisplayName { get; set; }

        public ApplicationUser()
        {
            this.BlogComments = new HashSet<Comment>();
        }

        public virtual ICollection<Comment> BlogComments { get; set; }
    }



    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public async Task<bool> AddRefreshToken(RefreshToken token)
        {

            var existingToken = await RefreshTokens.SingleOrDefaultAsync(r => r.Subject == token.Subject);

            if (existingToken != null)
            {
                var result = await RemoveRefreshToken(existingToken);
            }

            RefreshTokens.Add(token);

            return await SaveChangesAsync() > 0;
        }

        public async Task<bool> RemoveRefreshToken(string refreshTokenId)
        {
            var refreshToken = await RefreshTokens.FindAsync(refreshTokenId);

            if (refreshToken != null)
            {
                RefreshTokens.Remove(refreshToken);
                return await SaveChangesAsync() > 0;
            }

            return false;
        }

        public async Task<bool> RemoveRefreshToken(RefreshToken refreshToken)
        {
            RefreshTokens.Remove(refreshToken);
            return await SaveChangesAsync() > 0;
        }

        public async Task<RefreshToken> FindRefreshToken(string refreshTokenId)
        {
            var refreshToken = await RefreshTokens.FindAsync(refreshTokenId);

            return refreshToken;
        }

        public List<RefreshToken> GetAllRefreshTokens()
        {
            return RefreshTokens.ToList();
        }

        public DbSet<Blogpost> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Grant> Grants { get; set; }
    }
}