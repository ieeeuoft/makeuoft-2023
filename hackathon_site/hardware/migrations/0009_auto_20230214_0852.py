# Generated by Django 3.2.12 on 2023-02-14 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("hardware", "0008_hardware_image_url"),
    ]

    operations = [
        migrations.AlterField(
            model_name="hardware",
            name="datasheet",
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="hardware",
            name="image_url",
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name="hardware",
            name="manufacturer",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="hardware",
            name="model_number",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="hardware",
            name="notes",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="hardware",
            name="picture",
            field=models.ImageField(
                blank=True, null=True, upload_to="uploads/hardware/pictures/"
            ),
        ),
    ]
