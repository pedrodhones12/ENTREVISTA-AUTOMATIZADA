CREATE TABLE resultados_ea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    respostas TEXT,
    carreira1 VARCHAR(100),
    carreira2 VARCHAR(100),
    carreira3 VARCHAR(100)
);
\
