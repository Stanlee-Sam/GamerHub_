
-- Add 'createdAt' column with default current timestamp
ALTER TABLE products_table
ADD COLUMN createdAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Add 'updatedAt' column with default current timestamp
ALTER TABLE products_table
ADD COLUMN updatedAt TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
