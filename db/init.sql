SELECT 'CREATE DATABASE turismayadb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'turismayadb')\gexec