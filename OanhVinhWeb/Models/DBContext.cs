using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebOanhVinh.Models
{
    public partial class DBContext : DbContext
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

        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
        }

        public DBContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=DeOanhVinh;User ID=sa;Password=123456;Trust Server Certificate=True;Command Timeout=300");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.Avatar).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.PhoneNumber).IsUnicode(false);
            });

            modelBuilder.Entity<Owner>(entity =>
            {
                entity.Property(e => e.Avatar).IsUnicode(false);
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

                entity.Property(e => e.Avatar).IsUnicode(false);

                entity.Property(e => e.Password).IsUnicode(false);

                entity.Property(e => e.PhoneNumber).IsUnicode(false);
            });

            modelBuilder.Entity<WebsiteActiveImage>(entity =>
            {
                entity.Property(e => e.Images).IsUnicode(false);

                entity.Property(e => e.LinkToDetail).IsUnicode(false);

                entity.Property(e => e.WebsiteID).IsFixedLength();
            });

            modelBuilder.Entity<WebsiteInfo>(entity =>
            {
                entity.Property(e => e.CreateBy).IsUnicode(false);

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.GoogleMap).IsUnicode(false);

                entity.Property(e => e.WebsiteIcon).IsUnicode(false);

                entity.Property(e => e.WebsitePhoneNumber).IsUnicode(false);

                entity.Property(e => e.WebsiteVideoIntro).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
