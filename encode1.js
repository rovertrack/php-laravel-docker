const CryptoJS = require('crypto-js')
function main(){

    
    const PendingCasesData = [
    {
                "vno": "0000867769/24",
                "vtime": "",
                "vdate": "01-09-2024 15:35",
                "point": "500 - Mudageri Gate Channapatna (Ramanagar) 4th location towards Mysuru",
                "fine": "250",
                "offencecode": "30",
                "offencename": "Not wearing Seat Belt",
                "file_path": "http://117.247.189.6:8071/offence_images/long_distance_images//192.168.1.4/20240901/KA11M7992-202409011535.jpg",
                "implementationCode": "MYSHW",
                "districtCode": 106,
                "opted":true
            },
            {
                "vno": "0000596023/24",
                "vtime": "",
                "vdate": "06-08-2024 23:57",
                "point": "1000 - Gejjalagere KMF (Mandya) 2nd location towards Mysore",
                "fine": "500",
                "offencecode": "114",
                "offencename": "Sectional Over Speed",
                "file_path": "http://117.247.189.6:8071/offence_images/long_distance_images//192.168.1.22/20240806/KA11M7992-202408062357.jpg",
                "implementationCode": "MYSHW",
                "districtCode": 108,
                "opted":true
            }
];
    
    let data = {
            TokenInfo: CryptoJS.AES.encrypt(JSON.stringify({
                reg_no: "KA11M7992",
                district: "571401",
                pendingcases: PendingCasesData.filter(data => data.opted === true),
                case_type: 2,
                mobile_number: "9481171055",
                violations:"0000867769/24,0000596023/24",
                "data": {
                    "REGISTRATION_NUMBER": "KA11M7992",
                    "OFFENCE_FINE_AMOUNT": "750",
                    "NAME": "PRADEEP KUMAR N B",
                },
                ownerAddress: "Mandya",
                ownerName: "PRADEEP KUMAR N B",
                btpTypeCode:"6"
            }),  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJ2aWNlSWQiOiJwZW5kaW5nQ2FzZXMiLCJyZWdpc3RyYXRpb25ObyI6IktBMTFNNzk5MiIsImlhdCI6MTc1NzQ0MTk3MywiZXhwIjoxNzU3NDcwNzczLCJpc3MiOiJUZWxpYnJhaG1hIn0.Fpx6M4UCATOEKeu-2pOuuWvznSuoHu1f7snBFXRbwVE").toString(),
            "AuthToken":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJ2aWNlSWQiOiJwZW5kaW5nQ2FzZXMiLCJyZWdpc3RyYXRpb25ObyI6IktBMTFNNzk5MiIsImlhdCI6MTc1NzQ0MTk3MywiZXhwIjoxNzU3NDcwNzczLCJpc3MiOiJUZWxpYnJhaG1hIn0.Fpx6M4UCATOEKeu-2pOuuWvznSuoHu1f7snBFXRbwVE"
        }
        console.log(data);

    
}   main();