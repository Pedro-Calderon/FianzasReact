# Generated by Django 3.1.7 on 2023-12-15 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movimiento',
            fields=[
                ('idMovimiento', models.AutoField(primary_key=True, serialize=False)),
                ('monto', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tipo', models.CharField(max_length=20)),
                ('concepto', models.CharField(max_length=20)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
