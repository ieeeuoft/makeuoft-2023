# Generated by Django 3.2.15 on 2023-01-16 22:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("registration", "0008_alter_application_dietary_restrictions"),
    ]

    operations = [
        migrations.RenameField(
            model_name="application",
            old_name="custom_choice",
            new_name="specific_dietary_requirement",
        ),
    ]