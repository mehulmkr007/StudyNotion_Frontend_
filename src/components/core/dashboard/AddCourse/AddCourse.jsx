import React from 'react'
import RenderSteps from './RenderSteps'
import ErrorBoundary from '../../../common/ErrorBoundary'
const AddCourse = () => {
  return (
    <div className='flex lg:flex-row w-full justify-center gap-x-6 flex-col gap-y-4 items-center'>

        <div className='flex flex-1 flex-col items-center sm:max-w-[343px] lg:mr-4'>
            <h1 className='mt-10 mb-10 text-3xl font-medium text-richblack-5'>
                Add Course
            </h1>

            <div className='flex-1'>
                <RenderSteps/>
            </div>
        </div>

        <div className='sticky top-10 max-w-[390px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6'>
            <p className='mb-8 text-lg text-richblack-5'>⚡ Course Upload Tips</p>
            <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
                <li>Set the Course Price option or make it free.</li>
                <li>Standard size for the course thumbnail is 1024x576.</li>
                <li>Video section controls the course overview video.</li>
                <li>Course Builder is where you create & organize a course.</li>
                <li>
                    Add Topics in the Course Builder section to create lessons,
                    quizzes, and assignments.
                </li>
                <li>
                    Information from the Additional Data section shows up on the
                    course single page.
                </li>
                <li>Make Announcements to notify any important</li>
                <li>Notes to all enrolled students at once.</li>
                </ul>
        </div>

    </div>
  )
}

export default AddCourse
