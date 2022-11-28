import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Day from "../components/Day";
import { v4 as uuidv4 } from "uuid";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import * as mutations from "../graphql/mutations";
import DaySet from "../components/DaySet";
import { useState, useEffect, useRef, useContext } from "react";
import Details from "../components/Details";
import Class from "../components/Class";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Menu from "../components/Menu";

export default function Profile() {
  return (
    <div className="page-container">
      <Menu />
      {/* <Toolbar /> */}
      <div className="calendar-container">
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList className="tab-list">
            <Tab>Adults</Tab>
            <Tab>Kids</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="signup-container">
                <DaySet exclude="kids" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="signup-container">
                <DaySet exclude="adults" />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* <div className={styles.hl}></div> */}
        <div className={styles.details}>
          <div className={styles.detailsHeaders}>
            <p className={styles.detailsHeader}>Details</p>
            <p className={styles.attendeesHeader}>Attendees</p>
          </div>
          <Details />
        </div>
      </div>
    </div>
  );
}