# Generated by Django 3.2.23 on 2024-10-15 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_formdata_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formdata',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]