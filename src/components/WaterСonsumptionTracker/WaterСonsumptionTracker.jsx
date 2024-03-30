import React from "react";
import { Link } from "react-router-dom";
import {
    TrackerContainer,
    Title,
    Subtitle,
    TitleTracker,
    ListTrackers,
    ItemTracker,
    TextTracker,
    ButtonTracker
} from "./WaterConsumptionTracker.styled";

const WaterConsumptionTracker = () => {
    return (
        <TrackerContainer>
            <Title>Water consumption tracker</Title>
            <Subtitle>Record daily water intake and track</Subtitle>
            <TitleTracker>Tracker Benefits</TitleTracker>
            <ListTrackers>
                <ItemTracker>
                    <svg width={32} height={32}>
                        <use href="src/assets/img/sprite.svg#icon-calendar-days"></use>
                    </svg>
                    <TextTracker>Habit drive</TextTracker>
                </ItemTracker>
                <ItemTracker>
                    <svg width={32} height={32}>
                        <use href="src/assets/img/sprite.svg#icon-presentation-chart-bar"></use>
                    </svg>
                    <TextTracker>View statistics</TextTracker>
                </ItemTracker>
                <ItemTracker>
                    <svg width={32} height={32}>
                        <use href="src/assets/img/sprite.svg#icon-wrench-screwdriver"></use>
                    </svg>
                    <TextTracker>Personal rate setting</TextTracker>
                </ItemTracker>
            </ListTrackers>
            <Link to='/signup'>
                <ButtonTracker type="button">Try Tracker</ButtonTracker>
            </Link>
        </TrackerContainer>
    )
};

export default WaterConsumptionTracker;