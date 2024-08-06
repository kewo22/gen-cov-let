"use client";

interface FormI {
  onSubmit: (e: any) => void
}

export default function Form(props: FormI) {

  const profileSummaryDefaultVal = `Experienced and goal-oriented Commercial Manager with 6 years of accomplishment in the e-commerce sector. Demonstrated success in boosting revenue, refining pricing approaches, and enlarging market presence at prominent firms such as Daraz & KOKO. Proficient in crafting and executing inventive commercial strategies to seize market opportunities and achieve business goals. Experienced in fostering collaboration across teams, leading teams effectively, and managing customer relationships. Possesses strong analytical abilities to interpret data for informed decision-making. Seeking to apply commercial management proficiency to propel achievement and advancement within a dynamic e-commerce setting.`

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      company: { value: string },
      designation: { value: string },
      jobDescription: { value: string },
      profileSummary: { value: string },
    }
    const values = [formElements.company.value, formElements.designation.value, formElements.jobDescription.value, formElements.profileSummary.value]
    const isBelowThreshold = (currentValue: string) => currentValue;
    const isAllFilled = values.every(isBelowThreshold);
    if (!isAllFilled) return;
    props.onSubmit({
      company: formElements.company.value,
      designation: formElements.designation.value,
      jobDescription: formElements.jobDescription.value,
      profileSummary: formElements.profileSummary.value,
    })
  };

  return (
    <form className="flex flex-col items-start gap-2" onSubmit={onSubmit}>
      <div className="w-[550px] flex flex-row gap-2">
        <div className="flex-grow flex flex-col gap-2">
          <label htmlFor="" className="">
            Company
          </label>
          <input type="text" id="company" className="w-full p-2 rounded-sm" />
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <label htmlFor="" className="">
            Designation
          </label>
          <input type="text" id="designation" className="w-full p-2 rounded-sm" />
        </div>
      </div>
      <div className="w-[550px] flex flex-col gap-2">
        <label htmlFor="" className="">
          Job Description
        </label>
        <textarea rows={10} id="jobDescription" className="w-full p-2 rounded-sm" />
      </div>
      <div className="w-[550px] flex flex-col gap-2">
        <label htmlFor="" className="">
          Profile Summary
        </label>
        <textarea rows={10} id="profileSummary" className="w-full p-2 rounded-sm" defaultValue={profileSummaryDefaultVal} />
      </div>
      <input type="submit" className="bg-white px-3 py-1 rounded ml-auto cursor-pointer hover:bg-gray-900 hover:text-white" />
    </form>
  );
}
