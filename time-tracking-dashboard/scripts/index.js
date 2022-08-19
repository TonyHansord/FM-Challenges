`use strict`;

const dailyBtn = document.getElementById(`daily`);
const weeklyBtn = document.getElementById(`weekly`);
const monthlyBtn = document.getElementById(`monthly`);
const cardTimes = document.querySelectorAll(`.card-time`);
const prevTimes = document.querySelectorAll(`.prev-time`);
const listItems = document.querySelectorAll(`.list-item`);

let work = {
  title: "Work",
  timeframes: {
    daily: 5,
    prevDaily: 7,
    weekly: 32,
    prevWeekly: 36,
    monthly: 103,
    prevMonthly: 128,
  },
};

let play = {
  title: "Play",
  timeframes: {
    daily: 1,
    prevDaily: 2,
    weekly: 10,
    prevWeekly: 8,
    monthly: 23,
    prevMonthly: 29,
  },
};

let study = {
  title: "Study",
  timeframes: {
    daily: 5,
    prevDaily: 7,
    weekly: 32,
    prevWeekly: 36,
    monthly: 103,
    prevMonthly: 128,
  },
};

let exercise = {
  title: "Exercise",
  timeframes: {
    daily: 5,
    prevDaily: 7,
    weekly: 32,
    prevWeekly: 36,
    monthly: 103,
    prevMonthly: 128,
  },
};

let social = {
  title: "Social",
  timeframes: {
    daily: 5,
    prevDaily: 7,
    weekly: 32,
    prevWeekly: 36,
    monthly: 103,
    prevMonthly: 128,
  },
};

let selfCare = {
  title: "Self Care",
  timeframes: {
    daily: 5,
    prevDaily: 7,
    weekly: 32,
    prevWeekly: 36,
    monthly: 103,
    prevMonthly: 128,
  },
};

const activities = [work, play, study, exercise, social, selfCare];

function setActive(timeframe) {
  for (i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove(`active`);
    timeframe.classList.add("active");
  }
}

function showDaily() {
  setActive(dailyBtn);
  for (i = 0; i < activities.length; i++) {
    cardTimes[i].textContent = `${activities[i].timeframes.daily} ${
      activities[i].timeframes.daily === 1 ? "hr" : "hrs"
    }`;
    prevTimes[i].textContent = `${activities[i].timeframes.prevDaily} ${
      activities[i].timeframes.prevDaily === 1 ? "hr" : "hrs"
    }`;
  }
}

function showWeekly() {
  setActive(weeklyBtn);
  for (i = 0; i < activities.length; i++) {
    cardTimes[i].textContent = `${activities[i].timeframes.weekly} ${
      activities[i].timeframes.weekly === 1 ? "hr" : "hrs"
    }`;
    prevTimes[i].textContent = `${activities[i].timeframes.prevWeekly} ${
      activities[i].timeframes.prevWeekly === 1 ? "hr" : "hrs"
    }`;
  }
}

function showMonthly() {
  setActive(monthlyBtn);
  for (i = 0; i < activities.length; i++) {
    cardTimes[i].textContent = `${activities[i].timeframes.monthly} ${
      activities[i].timeframes.monthly === 1 ? "hr" : "hrs"
    }`;
    prevTimes[i].textContent = `${activities[i].timeframes.prevMonthly} ${
      activities[i].timeframes.prevMonthly === 1 ? "hr" : "hrs"
    }`;
  }
}

dailyBtn.addEventListener(`click`, showDaily);
weeklyBtn.addEventListener(`click`, showWeekly);
monthlyBtn.addEventListener(`click`, showMonthly);

// 32hrs
// <!-- weekly -->
// Previous - 36hrs
// <!-- weekly -->
// 103hrs
// <!-- monthly -->
// Previous - 128hrs
// <!-- monthly -->

// Play 1hr
// <!-- daily -->
// Previous - 2hrs
// <!-- daily -->
// 10hrs
// <!-- weekly -->
// Previous - 8hrs
// <!-- weekly -->
// 23hrs
// <!-- monthly -->
// Previous - 29hrs
// <!-- monthly -->

// Study 0hrs
// <!-- daily -->
// Previous - 1hr
// <!-- daily -->
// 4hrs
// <!-- weekly -->
// Previous - 7hrs
// <!-- weekly -->
// 13hrs
// <!-- monthly -->
// Previous - 19hrs
// <!-- monthly -->

// Exercise 1hr
// <!-- daily -->
// Previous - 1hr
// <!-- daily -->
// 4hrs
// <!-- weekly -->
// Previous - 5hrs
// <!-- weekly -->
// 11hrs
// <!-- monthly -->
// Previous - 18hrs
// <!-- monthly -->

// Social 1hr
// <!-- daily -->
// Previous - 3hrs
// <!-- daily -->
// 5hrs
// <!-- weekly -->
// Previous - 10hrs
// <!-- weekly -->
// 21hrs
// <!-- monthly -->
// Previous - 23hrs
// <!-- monthly -->

// Self Care 0hrs
// <!-- daily -->
// Previous - 1hr
// <!-- daily -->
// 2hrs
// <!-- weekly -->
// Previous - 2hrs
// <!-- weekly -->
// 7hrs
// <!-- monthly -->
// Previous - 11hrs
// monthly
