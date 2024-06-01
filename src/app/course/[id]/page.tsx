"use client";

import CourseLayout from "@/app/course/layout";
import CoursePage from "@/app/course/page";
import { useEffect, useState } from "react";

const CourseDetailsPage = ({ params }: any) => {
  const courseId = params.id;
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`https://fitness-project-ind15-default-rtdb.europe-west1.firebasedatabase.app/courses/${courseId}.json`);
        const data = await response.json();
        setCourseData(data);
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
};

export default CourseDetailsPage;
