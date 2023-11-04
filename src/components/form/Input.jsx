/* eslint-disable react/prop-types */
export default function Input({
  labelName,
  type,
  name,
  error
}) {
  return (
    <div className="mt-8">
      <label className="text-gray-500 text-sm">{labelName}</label>
      <input name={name} type={type} className="input border-0 border-b-2 border-blue-300 w-full rounded-none" />
      <p className="mt-2 text-red-500">{error}</p>
    </div>
  )
}
