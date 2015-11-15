using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RG_Personal.Models
{
    public class Category
    {
        public Category()
        {
            this.Blogposts = new HashSet<Blogpost>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public virtual ICollection<Blogpost> Blogposts { get; set; }
        
    }
}