"use client"

import CourseLayout from "@/app/course/layout";
import CoursePage from "@/app/course/page";
import { useEffect, useState } from "react";

// Imported JSON
import data from '../../../lib/data.json';

type paramsIDType = {
    params: string;
};

const CourseDetailsPage = ({ params }: any) => {

    const courseContent = data.courses;
    const courseId = params.id;

    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                //@ts-ignore
                const course = data.courses[courseId];
                if (course) {
                    setCourseData(course);
                } else {
                    console.error("Course not found");
                }
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };

        fetchCourseData();
    }, [courseId]);

    return (
        <CourseLayout>
            <CoursePage courseData={courseData} />
        </CourseLayout>
    );
}

export default CourseDetailsPage;