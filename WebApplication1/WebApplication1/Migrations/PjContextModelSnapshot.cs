﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication1.Context;

#nullable disable

namespace WebApplication1.Migrations
{
    [DbContext(typeof(PjContext))]
    partial class PjContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("WebApplication1.Domains.Booking", b =>
                {
                    b.Property<Guid>("BookingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("EndDate")
                        .IsRequired()
                        .HasColumnType("DATE");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("StartDate")
                        .IsRequired()
                        .HasColumnType("DATE");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("BookingId");

                    b.HasIndex("RoomId");

                    b.HasIndex("UserId");

                    b.ToTable("Booking");
                });

            modelBuilder.Entity("WebApplication1.Domains.Room", b =>
                {
                    b.Property<Guid>("RoomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Capacity")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<string>("Locality")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.HasKey("RoomId");

                    b.ToTable("Room");
                });

            modelBuilder.Entity("WebApplication1.Domains.User", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<string>("Office")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.HasKey("UserId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("WebApplication1.Domains.Booking", b =>
                {
                    b.HasOne("WebApplication1.Domains.Room", "Rooms")
                        .WithMany()
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApplication1.Domains.User", "Users")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Rooms");

                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
