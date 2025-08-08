import React from "react";

type SectionHeadingProps = {
  heading?: string | undefined;
  description?: string | undefined;
  fontSize: string | undefined;
  textColor: string | undefined;
};

const SectionHeading = ({
  heading,
  description,
  fontSize,
  textColor,
}: SectionHeadingProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {/* ================ HEADING ====================== */}
      {heading && (
        <h3 className={`${textColor} ${fontSize} font-semibold leading-8`}>
          {heading}
        </h3>
      )}

      {/* ================ DESCRIPTION ====================== */}
      {description && (
        <div className="w-1/2 mt-1.5">
          <p className="text-[#525252] font-normal text-sm text-center">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
