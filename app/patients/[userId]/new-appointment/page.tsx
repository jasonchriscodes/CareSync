import AppointmentForm from "@/components/form/AppointmentForm";
import PatientForm from "@/components/form/PatientForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const currentYear = new Date().getFullYear();
  const patient = await getPatient(userId);

  if (!patient) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Patient not found for userId: {userId}
      </div>
    );
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright mt-10 py-12">© {currentYear} CarePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
