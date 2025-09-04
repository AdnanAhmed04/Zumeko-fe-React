import React from 'react'

// importing components
import GreetingCard from '../components/GreetingCard';
import DashboardCards from '../components/DashboardCards';
import LateArrivalsCard from '../components/LateArrivalsCard';
import TodaysActivityCard from '../components/TodaysActivityCard';
import TeamSizeCard from '../components/TeamSizeCard';
import AttendanceRateCard from '../components/AttendanceRateCard';

import AttendanceSummary from '../components/AttendanceSummary';
import LeaveSummary from '../components/Leave Summary';
import CompanyAnnouncements from '../components/Announcements';
import PayrollStatus from '../components/PayrollStatus';
import TeamLeaveCalendar from '../components/TeamLeaveCalendar';
import Weather from '../components/Weather';
import GenderDiversity from '../components/GenderDiversity';
import EmploymentStatus from '../components/EmploymentStatus';
import OnboardingProgress from '../components/OnboardingProgress';
import UpcomingBirthdays from '../components/UpcomingBirthdays';
import WorkAnniversaries from '../components/WorkAnniversaries';
import ProbationPeriods from '../components/ProbationPeriods';





const Dashboard = () => {




  return (
    <div className='flex flex-col space-y-6'>
      Dashboard
      <GreetingCard />
      {/* <DashboardCards /> */}
      <div className="flex justify-between gap-4 lg:flex-nowrap flex-wrap">
        <LateArrivalsCard />
        <TeamSizeCard />
        <TodaysActivityCard />
        <AttendanceRateCard />
      </div>
      <AttendanceSummary />
      <LeaveSummary />
      <CompanyAnnouncements />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PayrollStatus />
        <TeamLeaveCalendar />
        <Weather />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  <GenderDiversity />
  <EmploymentStatus />
  <OnboardingProgress />
</div>


      <div className="flex justify-between">
        <UpcomingBirthdays />
        <WorkAnniversaries />
        <ProbationPeriods />
      </div>



    </div>
  )
}

export default Dashboard
