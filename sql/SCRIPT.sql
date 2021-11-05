drop database umg;
create database umg;
use umg; 

select * from usuario;
select * from ocupacion;
select * from empleado;
select * from rol;
select * from modulo;
DESC usuario;

SELECT NOW();

insert into ocupacion (nombre, estado, createdAt, updatedAt) values ('admin', 'A', now(), now());

select * from rol_modulo;

select r.dbid, r.nombre rol, m.dbid, m.nombre modulo, rm.dbid  
from rol r, modulo m, rol_modulo rm
where r.dbid = rm.rol_dbid
and m.dbid = rm.modulo_dbid;

select * from transaccion;
select * from rol_modulo_transaccion;








/*INSERTS*/

-- OCUPACIONES
INSERT INTO `ocupacion` VALUES (1,'Gerente','A','2020-09-25 19:59:10','2020-09-25 19:59:10');
INSERT INTO `ocupacion` VALUES (2,'Vendedor','A','2020-09-25 19:59:10','2020-09-25 19:59:10');

-- EMPELADOS
INSERT INTO `empleado` VALUES (1,'Roberto Antonio','Lara Morataya','M','C','2086001830901','9147704-2','Fraijanes','55555555','lara@gmail.com','1991-09-10 00:00:00','123','B',NULL,3000.00,NULL,NULL,'2010-01-01 00:00:00',NULL,'A','2020-09-25 19:59:12','2020-09-25 19:59:12',1);
INSERT INTO `empleado` VALUES (2,'Nextor','Bonilla','M','C','586952214598','9147704-2','Zona 1','55555555','nbonilla@gmail.com','1991-09-10 00:00:00','123','B',NULL,3000.00,NULL,NULL,'2010-01-01 00:00:00',NULL,'A','2020-09-25 19:59:12','2020-09-25 19:59:12',1);
INSERT INTO `empleado` VALUES (3,'Jerson','Abrego','M','C','112369874586','9147704-2','Barberena','55555555','jabrego@gmail.com','1991-09-10 00:00:00','123','B',NULL,3000.00,NULL,NULL,'2010-01-01 00:00:00',NULL,'A','2020-09-25 19:59:12','2020-09-25 19:59:12',1);
INSERT INTO `empleado` VALUES (4,'Pachero','Maluma','M','C','112369874586','9147704-2','EEUU','55555555','pmaluma@gmail.com','1991-09-10 00:00:00','123','B',NULL,3000.00,NULL,NULL,'2010-01-01 00:00:00',NULL,'A','2020-09-25 19:59:12','2020-09-25 19:59:12',1);

-- USUARIOS
INSERT INTO `usuario` VALUES (1,'rlara','$2b$12$J0AHPxj3GZv3SqKeFJvdUef1Duz/NUcePoHV6v.lTT5kEATUtgK3G','A','2020-09-25 19:59:15','2020-09-25 19:59:15',1);
INSERT INTO `usuario` VALUES (2,'nbonilla','$2b$12$J0AHPxj3GZv3SqKeFJvdUef1Duz/NUcePoHV6v.lTT5kEATUtgK3G','A','2020-09-25 19:59:15','2020-09-25 19:59:15',2);
INSERT INTO `usuario` VALUES (3,'jabrego','$2b$12$J0AHPxj3GZv3SqKeFJvdUef1Duz/NUcePoHV6v.lTT5kEATUtgK3G','A','2020-09-25 19:59:15','2020-09-25 19:59:15',3);
INSERT INTO `usuario` VALUES (4,'pmaluma','$2b$12$J0AHPxj3GZv3SqKeFJvdUef1Duz/NUcePoHV6v.lTT5kEATUtgK3G','A','2020-09-25 19:59:15','2020-09-25 19:59:15',4);

-- ROLES
INSERT INTO `rol` VALUES (1,'Administrador','A','2020-09-25 19:59:18','2020-09-25 19:59:18');
INSERT INTO `rol` VALUES (2,'Vendedor','A','2020-09-25 19:59:18','2020-09-25 19:59:18');
INSERT INTO `rol` VALUES (3,'Bodeguero','A','2020-09-25 19:59:18','2020-09-25 19:59:18');


-- USUARIOS POR ROL
-- select * from usuario_rol;
INSERT INTO `usuario_rol` VALUES (1,'2020-09-25 19:59:26','2020-09-25 19:59:26',1,1);
INSERT INTO `usuario_rol` VALUES (2,'2020-09-25 19:59:26','2020-09-25 19:59:26',2,2);
INSERT INTO `usuario_rol` VALUES (3,'2020-09-25 19:59:26','2020-09-25 19:59:26',3,3);
INSERT INTO `usuario_rol` VALUES (4,'2020-09-25 19:59:26','2020-09-25 19:59:26',1,2);

-- MODULOS
INSERT INTO `modulo` VALUES (1,'Ocupaciones','occupation','work','A','2020-09-25 20:04:42','2020-09-25 20:04:42'),
							(2,'Roles','rol','account_circle','A','2020-09-25 20:01:52','2020-09-25 20:01:52');
INSERT INTO `modulo` VALUES (3,'Empleado','employee','supervised_user_circle','A','2020-09-25 20:01:52','2020-09-25 20:01:52');
INSERT INTO `modulo` VALUES (4,'Rol Modulo','rol-module','view_module','A','2020-09-25 20:01:52','2020-09-25 20:01:52');
INSERT INTO `modulo` VALUES  (5,'Asignar rol a usuario','usuario-rol','account_circle','A','2020-09-25 20:04:42','2020-09-25 20:04:42');
INSERT INTO `modulo` VALUES  (6,'Transportes','transport','local_shipping','A','2020-09-25 20:04:42','2020-09-25 20:04:42');
INSERT INTO `modulo` VALUES  (7,'Proveedores','provider','assignment','A','2020-09-25 20:04:42','2020-09-25 20:04:42');
INSERT INTO `modulo` VALUES  (8,'Marcas','brand','branding_watermark','A','2020-09-25 20:04:42','2020-09-25 20:04:42');
INSERT INTO `modulo` VALUES  (9,'Productos','product','menu_book','A','2020-09-25 20:04:42','2020-09-25 20:04:42');

-- ROL POR MODULO
select * from rol_modulo;
INSERT INTO `rol_modulo` VALUES (1,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,1),
								(2,'2020-09-25 20:05:16','2020-09-25 20:05:16',1,2),
                                (3,'2020-09-25 20:05:10','2020-09-25 20:05:10',2,2);
INSERT INTO `rol_modulo` VALUES  (4,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,3);
INSERT INTO `rol_modulo` VALUES  (5,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,4);      
INSERT INTO `rol_modulo` VALUES (6,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,5);
INSERT INTO `rol_modulo` VALUES (7,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,6);
INSERT INTO `rol_modulo` VALUES (8,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,7);
INSERT INTO `rol_modulo` VALUES (9,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,8);
INSERT INTO `rol_modulo` VALUES (10,'2020-09-25 20:05:10','2020-09-25 20:05:10',1,9);                                
						
-- TRANSACCIONES
INSERT INTO `transaccion` VALUES (1,'abcabc','Crear','2020-09-25 20:06:24','2020-09-25 20:06:24'),
								(2,'ertryrt','Actualizar','2020-09-25 20:06:33','2020-09-25 20:06:33'),
                                (3,'bmdjgh','Eliminar','2020-09-25 20:06:41','2020-09-25 20:06:41');

					
-- ROL-MODULO POR TRANSACCION
SELECT * FROM rol_modulo_transaccion;
INSERT INTO `rol_modulo_transaccion` VALUES (1,'2020-09-25 20:08:28','2020-09-25 20:08:28',1,1),
											(2,'2020-09-25 20:08:31','2020-09-25 20:08:31',2,1),
                                            (3,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,1),
                                            (4,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,2);
INSERT INTO `rol_modulo_transaccion` VALUES (6,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,3);
INSERT INTO `rol_modulo_transaccion` VALUES (7,'2020-09-25 20:08:35','2020-09-25 20:08:35',1,5);
INSERT INTO `rol_modulo_transaccion` VALUES (8,'2020-09-25 20:08:35','2020-09-25 20:08:35',2,5);
INSERT INTO `rol_modulo_transaccion` VALUES (9,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,5);
INSERT INTO `rol_modulo_transaccion` VALUES (10,'2020-09-25 20:08:35','2020-09-25 20:08:35',1,6),
											(11,'2020-09-25 20:08:35','2020-09-25 20:08:35',2,6),
                                            (12,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,6);
INSERT INTO `rol_modulo_transaccion` VALUES (13,'2020-09-25 20:08:35','2020-09-25 20:08:35',1,7),
											(14,'2020-09-25 20:08:35','2020-09-25 20:08:35',2,7),
                                            (15,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,7);
INSERT INTO `rol_modulo_transaccion` VALUES (16,'2020-09-25 20:08:35','2020-09-25 20:08:35',1,8),
											(17,'2020-09-25 20:08:35','2020-09-25 20:08:35',2,8),
                                            (18,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,8);
INSERT INTO `rol_modulo_transaccion` VALUES (19,'2020-09-25 20:08:35','2020-09-25 20:08:35',1,9),
											(20,'2020-09-25 20:08:35','2020-09-25 20:08:35',2,9),
                                            (21,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,9);
INSERT INTO `rol_modulo_transaccion` VALUES (22,'2020-09-25 20:08:35','2020-09-25 20:08:35',1,10),
											(23,'2020-09-25 20:08:35','2020-09-25 20:08:35',2,10),
                                            (24,'2020-09-25 20:08:35','2020-09-25 20:08:35',3,10);


SELECT CONCAT(e.nombres, e.apellidos) Empleado, u.nombre Usuario, r.nombre Rol, m.nombre Modulo, t.nombre Transaccion
FROM empleado e, ocupacion o, usuario u, rol r, usuario_rol ur, modulo m, rol_modulo rm, transaccion t, rol_modulo_transaccion rmt
WHERE o.dbid = e.ocupacion_dbid
AND e.dbid = u.empleado_dbid
AND u.dbid = ur.usuario_dbid
AND r.dbid = ur.rol_dbid
AND r.dbid = rm.rol_dbid
AND m.dbid = rm.modulo_dbid
AND rm.dbid = rmt.rol_modulo_dbid
AND t.dbid = rmt.transaccion_dbid;