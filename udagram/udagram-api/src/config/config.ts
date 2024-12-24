import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

// export const config = {
//   username: `${process.env.POSTGRES_USERNAME}`,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   host: process.env.POSTGRES_HOST,
//   aws_region: process.env.AWS_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };

export const config = {
  username: "postgres",
  password: "postgres1234*",
  database: "postgres",
  host: "postgres.cbrtlgy5plc1.us-east-2.rds.amazonaws.com",
  aws_region: "",
  AWS_DEFAULT_REGION:"",
  aws_profile: "",
  aws_media_bucket: "",
  url: "http://localhost:8080",
  jwt: {
    secret: "process.env.JWT_SECRET",
  },
  accessKeyId:"",
  secretAacessKey:""
};
