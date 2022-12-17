/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_AMPLIFYLAYERGUIDE_GRAPHQLAPIENDPOINTOUTPUT
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const appsyncUrl = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIENDPOINTOUTPUT;
const apiKey = process.env.API_AMPLIFYLAYERGUIDE_GRAPHQLAPIKEYOUTPUT;

const { request } = require("/opt/appSyncRequest");
const { updateDay } = require("/opt/graphql/mutations");
const { getUser } = require("/opt/graphql/queries");

exports.handler = async (event) => {
  const weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  // Get the current date and find the preceeding and week-after days

  let date_yday = new Date(new Date().setDate(new Date().getDate() - 1));
  let date_nextw = new Date(new Date().setDate(new Date().getDate() + 6));

  let day_yday = ("0" + date_yday.getDate()).slice(-2);
  let month_yday = ("0" + (date_yday.getMonth() + 1)).slice(-2);
  let year_yday = date_yday.getFullYear();
  let date_yday_AWS = year_yday + "-" + month_yday + "-" + day_yday;

  let day_nextw = ("0" + date_nextw.getDate()).slice(-2);
  let month_nextw = ("0" + (date_nextw.getMonth() + 1)).slice(-2);
  let year_nextw = date_nextw.getFullYear();
  let date_nextw_AWS = year_nextw + "-" + month_nextw + "-" + day_nextw;

  try {
    // Update the dates of the preceeding and week-after days
    console.log("test", date_nextw_AWS);
    var changeDays = await request(
      {
        query: updateDay,
        variables: {
          input: {
            id: weekday[date_nextw.getDay()],
            date: date_nextw_AWS,
          },
        },
      },
      appsyncUrl,
      apiKey
    );
  } catch (error) {
    console.log(error);
  }
};
