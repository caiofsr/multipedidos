-- CreateTable
CREATE TABLE `Measurement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weight` DOUBLE NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
