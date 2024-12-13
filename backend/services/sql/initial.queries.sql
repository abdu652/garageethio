CREATE TABLE IF NOT EXISTS `customer_identifier` (
   `customer_id` INT(11) NOT NULL AUTO_INCREMENT,
   `customer_email` VARCHAR(255) NOT NULL,
   `customer_phone_number` VARCHAR(255) NOT NULL,
   `customer_added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   `customer_hash` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`customer_id`),
   UNIQUE (`customer_email`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `CUSTOMER_INFO` (
   `customer_info_id` INT(11) NOT NULL AUTO_INCREMENT,
   `customer_id` INT(11) NOT NULL,
   `customer_first_name` VARCHAR(255) NOT NULL,
   `customer_last_name` VARCHAR(255) NOT NULL,
   `active_customer_status` INT(11) NOT NULL,
   PRIMARY KEY (`customer_info_id`),
   FOREIGN KEY (`customer_id`) REFERENCES `customer_identifier` (`customer_id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `customer_vehicle_info` (
   `vehicle_id` INT(11) NOT NULL AUTO_INCREMENT,
   `customer_id` INT(11) NOT NULL,
   `vehicle_year` INT(11) NOT NULL,
   `vehicle_make` VARCHAR(255) NOT NULL,
   `vehicle_model` VARCHAR(255) NOT NULL,
   `vehicle_type` VARCHAR(255) NOT NULL,
   `vehicle_mileage` INT(11) NOT NULL,
   `vehicle_tag` VARCHAR(255) NOT NULL,
   `vehicle_serial` VARCHAR(255) NOT NULL,
   `vehicle_color` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`vehicle_id`),
   FOREIGN KEY (`customer_id`) REFERENCES `customer_identifier` (`customer_id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `employee` (
   `employee_id` INT(11) NOT NULL AUTO_INCREMENT,
   `employee_email` VARCHAR(255) NOT NULL UNIQUE,
   `active_employee` INT(11) NOT NULL,
   `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`employee_id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `employee_info` (
   `employee_info_id` INT(11) NOT NULL AUTO_INCREMENT,
   `employee_id` INT(11) NOT NULL,
   `employee_first_name` VARCHAR(255) NOT NULL,
   `employee_last_name` VARCHAR(255) NOT NULL,
   `employee_phone_number` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`employee_info_id`),
   FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE = InnoDB;


CREATE Table if NOT EXISTS `employee_pass`(
   `employee_pass_id` int(11) NOT NULL  AUTO_INCREMENT,
   `employee_id` int(11) NOT NULL,
   `employee_password_hashed` VARCHAR(255) NOT NULL,
   PRIMARY KEY(employee_pass_id),
   FOREIGN KEY(employee_id) REFERENCES employee(employee_id)
)ENGINE=InnoDB;





CREATE TABLE IF NOT EXISTS `employee` (
   `employee_id` INT(11) NOT NULL AUTO_INCREMENT,
   `employee_first_name` VARCHAR(255) NOT NULL,
   `employee_last_name` VARCHAR(255) NOT NULL,
   `employee_phone_number` VARCHAR(255) NOT NULL,
   `employee_password` VARCHAR(255) NOT NULL,
   `active_employee` INT(11) NOT NULL,
   `added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`employee_id`)
) ENGINE = InnoDB;

alter table employee_pass change column employee_password_hashed employee_password VARCHAR(255) NOT NULL;