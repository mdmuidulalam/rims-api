-- F-05: Enable Dynamic Schema Database

-- Insert Data for skeleton columns
-- Insert Orders table CustomerId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 2 as a,
"CustomerId" as b,
"CustomerId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 2 AND `DataCode` = "CustomerId"
) LIMIT 1;

-- Insert OrderProducts table OrderId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 6 as a,
"OrderId" as b,
"OrderId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 6 AND `DataCode` = "OrderId"
) LIMIT 1;

-- Insert OrderProducts table ProductId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 6 as a,
"ProductId" as b,
"ProductId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 6 AND `DataCode` = "ProductId"
) LIMIT 1;

-- Insert Purchases table VendorId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 4 as a,
"VendorId" as b,
"VendorId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 4 AND `DataCode` = "VendorId"
) LIMIT 1;

-- Insert PurchasesProducts table PurchaseId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 8 as a,
"PurchaseId" as b,
"PurchaseId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 8 AND `DataCode` = "PurchaseId"
) LIMIT 1;

-- Insert PurchasesProducts table ProductId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 8 as a,
"ProductId" as b,
"ProductId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 8 AND `DataCode` = "ProductId"
) LIMIT 1;

-- Insert VendorsProducts table VendorId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 7 as a,
"VendorId" as b,
"VendorId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 7 AND `DataCode` = "VendorId"
) LIMIT 1;

-- Insert VendorsProducts table ProductId
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 7 as a,
"ProductId" as b,
"ProductId" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 7 AND `DataCode` = "ProductId"
) LIMIT 1;

-- Insert Products table ProductName
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 3 as a,
"Name" as b,
"ProductName" as c,
2 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 3 AND `DataCode` = "ProductName"
) LIMIT 1;

-- Insert Customers table CustomerName
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 1 as a,
"Name" as b,
"CustomerName" as c,
2 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 1 AND `DataCode` = "CustomerName"
) LIMIT 1;

-- Insert Orders table OrderName
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 2 as a,
"Order No." as b,
"Order Number" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 2 AND `DataCode` = "OrderName"
) LIMIT 1;

-- Insert Vendors table VendorName
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 5 as a,
"Name" as b,
"VendorName" as c,
2 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 5 AND `DataCode` = "VendorName"
) LIMIT 1;

-- Insert Orders table CustomerName
INSERT INTO DataSchemas
(`TableId`,
`DataName`,
`DataCode`,
`DataType`,
`DataFieldType`,
`Required`,
`ValueScript`)
SELECT * FROM (SELECT 4 as a,
"Purchase No." as b,
"PurchaseNumber" as c,
1 as d,
1 as e,
true as f,
null as g) AS tmp
WHERE NOT EXISTS (
    SELECT * FROM DataSchemas WHERE `TableId` = 4 AND `DataCode` = "PurchaseNumber"
) LIMIT 1;
