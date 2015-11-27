using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RG_Personal.Models
{
    public class Blogpost
    {
        public Blogpost()
        {
            this.Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public System.DateTimeOffset Created { get; set; }
        public System.DateTimeOffset? Updated { get; set; }
        public string Slug { get; set; }
        public string AuthorName { get; set; }

        [AllowHtml]
        [Required]
        [DataType(DataType.MultilineText)]
        public string Body { get; set; }

        public int CategoryId { get; set; }
        public string MediaUrl { get; set; }
        
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual Category Category { get; set; }
    }
}