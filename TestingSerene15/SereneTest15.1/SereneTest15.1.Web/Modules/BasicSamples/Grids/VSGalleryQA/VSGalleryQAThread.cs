﻿using System;
using System.Collections.Generic;

namespace SereneTest15._1.BasicSamples
{
    public class VSGalleryQAThread
    {
        public int ThreadId { get; set; }
        public string Title { get; set; }
        public DateTime StartedOn { get;set; }
        public string StartedByName { get; set; }
        public string StartedByUserId { get; set; }
        public DateTime LastPostOn { get; set; }
        public int PostCount { get; set; }
        public List<VSGalleryQAPost> Posts { get; set; }
    }
}