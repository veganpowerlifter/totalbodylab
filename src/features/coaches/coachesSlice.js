import {COACHES} from '../../app/shared/COACHES';

export const selectAllCoaches = () => {
    return COACHES;
};

export const selectCoachById = (id) => {
    return COACHES.find((coach) => coach.id === parseInt(id));
};

export const selectFeaturedCoach = () => {
    return COACHES.find((coach) => coach.featured); // ===true but that's redundant
};