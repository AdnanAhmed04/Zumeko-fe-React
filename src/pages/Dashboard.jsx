import React from 'react'

// importing components
import GreetingCard from '../components/GreetingCard';
import DashboardCards from '../components/DashboardCards';
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
    <div>
      Dashboard
      <GreetingCard />
      <DashboardCards />
      <AttendanceSummary />
      <LeaveSummary />
      <CompanyAnnouncements />

      <div className='flex justify-between'>
        <PayrollStatus />
        <TeamLeaveCalendar />
        <Weather />
      </div>

      <div className="p-6 flex space-x-6">
        <GenderDiversity />
        <EmploymentStatus />
        <OnboardingProgress />
      </div>

      <div className="p-6 flex space-x-6">
        <UpcomingBirthdays />
        <WorkAnniversaries />
        <ProbationPeriods />
      </div>



    </div>
  )
}

export default Dashboard
