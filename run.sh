#! /bin/bash
echo 'exporting variables... ';
export API_PORT=3000;

export DB_HOSTNAME='blue-hunter-db';
export DB_PORT='3306';

echo 'starting system... ';
npm start


echo 16c3aa968e47406db20d2fa2dfadf53f