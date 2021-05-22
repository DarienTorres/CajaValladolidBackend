CREATE DATABASE caja_valladolid_db;
USE caja_valladolid_db;
CREATE TABLE TBL_CMV_CLIENTE(
    idCliente INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    apellidoPaterno VARCHAR(180),
    apellidoMaterno VARCHAR(180),
    rfc VARCHAR(13),
    curp VARCHAR(18),
    fechaAlta DATETIME(),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE CAT_CMV_TIPO_CUENTA(
idCuenta INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombreCuenta VARCHAR(180)
);



CREATE TABLE TBL_CMV_CLIENTE_CUENTA(
idClienteCuenta INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
FOREIGN KEY (idCliente) REFERENCES TBL_CMV_CLIENTE(idCliente),
FOREIGN KEY (idCuenta) REFERENCES CAT_CMV_TIPO_CUENTA(idCuenta),
saldoActual  decimal(15,2)
fechaContratacion DATETIME(),
fechaUltimoMovimiento DATETIME()


);



DESCRIBE TBL_CMV_CLIENTE;
DESCRIBE CAT_CMV_TIPO_CUENTA;
DESCRIBE TBL_CMV_CLIENTE_CUENTA;