-- Add Procdedure AddFieldIfNotExists
SET GLOBAL log_bin_trust_function_creators = 1;
DELIMITER $$

DROP PROCEDURE IF EXISTS AddFieldIfNotExists 
$$

DROP FUNCTION IF EXISTS IsFieldExisting 
$$

CREATE FUNCTION IsFieldExisting (table_name_IN VARCHAR(100), field_name_IN VARCHAR(100)) 
RETURNS INT
RETURN (
    SELECT COUNT(COLUMN_NAME) 
    FROM INFORMATION_SCHEMA.columns 
    WHERE TABLE_SCHEMA = DATABASE() 
    AND TABLE_NAME = table_name_IN 
    AND COLUMN_NAME = field_name_IN
)
$$

CREATE PROCEDURE AddFieldIfNotExists (
    IN table_name_IN VARCHAR(100)
    , IN field_name_IN VARCHAR(100)
    , IN field_definition_IN VARCHAR(100)
)
BEGIN

    SET @isFieldThere = IsFieldExisting(table_name_IN, field_name_IN);
    IF (@isFieldThere = 0) THEN

        SET @ddl = CONCAT('ALTER TABLE ', table_name_IN);
        SET @ddl = CONCAT(@ddl, ' ', 'ADD COLUMN') ;
        SET @ddl = CONCAT(@ddl, ' ', field_name_IN);
        SET @ddl = CONCAT(@ddl, ' ', field_definition_IN);

        PREPARE stmt FROM @ddl;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;

    END IF;

END;
$$

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