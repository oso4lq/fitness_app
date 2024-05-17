import { CourseBegin } from "@/components/CourseBegin";
import { CourseMain } from "@/components/CourseMain";

interface CoursePageProps {
    courseData: any;
}

export default function CoursePage({ courseData }: CoursePageProps) {
    return (
        <>
            <CourseMain courseData={courseData} />
            <CourseBegin />
        </>
    );
}
