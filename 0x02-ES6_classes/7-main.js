import Airport from './7-airport';

const airport1 = new Airport('JFK Airport', 'JFK');
airport1.addAirline('Delta');
airport1.addAirline('American Airlines');
airport1.printAirports();
