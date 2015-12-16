using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RG_Personal.Models
{
    public class Grant
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string ImgBeforeUrl { get; set; }
        public string ImgBeforeDescription { get; set; }

        public string ImgAfterUrl { get; set; }
        public string ImgAfterDescription { get; set; }
    }
}