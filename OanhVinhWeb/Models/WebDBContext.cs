﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebOanhVinh.Models
{
    public partial class WebDBContext : DbContext
    {
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Owner> Owners { get; set; }
        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<PostCategory> PostCategories { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductCategory> ProductCategories { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }
        public virtual DbSet<TagConnect> TagConnects { get; set; }
        public virtual DbSet<TagType> TagTypes { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<WebsiteActiveImage> WebsiteActiveImages { get; set; }
        public virtual DbSet<WebsiteInfo> WebsiteInfos { get; set; }

        public WebDBContext(DbContextOptions<WebDBContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
          
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.PhoneNumber).IsUnicode(false);
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);
            });

            modelBuilder.Entity<PostCategory>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);
            });

            modelBuilder.Entity<ProductCategory>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);
            });

            modelBuilder.Entity<Tag>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);
            });

            modelBuilder.Entity<TagType>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserName).IsUnicode(false);

                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.PhoneNumber).IsUnicode(false);
            });

            modelBuilder.Entity<WebsiteActiveImage>(entity =>
            {
                entity.Property(e => e.LinkToDetail).IsUnicode(false);

            });

            modelBuilder.Entity<WebsiteInfo>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.GoogleMap).IsUnicode(false);

                entity.Property(e => e.WebsitePhoneNumber).IsUnicode(false);

                entity.Property(e => e.WebsiteVideoIntro).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
