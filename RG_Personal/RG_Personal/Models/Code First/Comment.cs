using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using RG_Personal.Models;
using Newtonsoft.Json;

namespace RG_Personal.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public string AuthorName { get; set; }

        [Required]
        [DataType(DataType.MultilineText)]
        public string Body { get; set; }
        public System.DateTimeOffset Created { get; set; }
        public System.DateTimeOffset? Updated { get; set; }
        public string UpdateReason { get; set; }
        
        [JsonIgnore]
        public virtual Blogpost Post { get; set; }

    }
}