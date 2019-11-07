import React from "react";
import styles from "./App.module.css";
import Header from "./components/header/header";
import Form from "./components/form/form";
import MainContent from "./components/mainContent/mainContent";

import getCategories from "./utils/filter/getCategories";
import getLocations from "./utils/filter/getLocations";

import getPeopleData from "./utils/APIcalls/getPeopleData";
import getTopicData from "./utils/APIcalls/getTopicData";
// import getTopicCategory from "./utils/filter/getTopicCategory";

const App = () => {
    const [view, setView] = React.useState("category");
    const [topic, setTopic] = React.useState(null);
    const [person, setPerson] = React.useState(null);
    const [location, setLocation] = React.useState("All");
    const [categoriesList, setCategoriesList] = React.useState(null);
    const [locationsList, setLocationsList] = React.useState(null);

    const [category, setCategory] = React.useState(null);

    const [peopleData, setPeopleData] = React.useState(getPeopleData());
    const [topicData, setTopicData] = React.useState(getTopicData());

    const [newItemAdded, setNewItemAdded] = React.useState(false);

    React.useEffect(() => {
        setPeopleData(getPeopleData());
    }, []);

    React.useEffect(() => {
        setTopicData(getTopicData());
    }, []);

    React.useEffect(() => {
        if (newItemAdded) {
            setPeopleData(getPeopleData());
            setTopicData(getTopicData());
        }
        setNewItemAdded(false);
    }, [newItemAdded, setTopicData, setPeopleData]);

    React.useEffect(() => {
        if (topicData) {
            setCategoriesList(getCategories(topicData));
        }
    }, [topicData, setCategoriesList]);

    React.useEffect(() => {
        if (peopleData) {
            setLocationsList(getLocations(peopleData));
        }
    }, [peopleData, setLocationsList]);

    console.log("categoriesList in app", categoriesList);
    console.log("category in app", category);
    return (
        <>
            <Header
                person={person}
                setPerson={setPerson}
                setView={setView}
                peopleData={peopleData}
                topicData={topicData}
            ></Header>

            <div className={styles["main"]}>
                <Form
                    view={view}
                    setView={setView}
                    topic={topic}
                    setTopic={setTopic}
                    location={location}
                    setLocation={setLocation}
                    peopleData={peopleData}
                    setPeopleData={setPeopleData}
                    category={category}
                    setCategory={setCategory}
                    topicData={topicData}
                    setTopicData={setTopicData}
                ></Form>

                <MainContent
                    view={view}
                    setView={setView}
                    topic={topic}
                    setTopic={setTopic}
                    location={location}
                    categoriesList={categoriesList}
                    locationsList={locationsList}
                    peopleData={peopleData}
                    category={category}
                    setCategory={setCategory}
                    topicData={topicData}
                    setNewItemAdded={setNewItemAdded}
                ></MainContent>
            </div>
        </>
    );
};

export default App;
