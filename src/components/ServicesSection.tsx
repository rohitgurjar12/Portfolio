import FadeIn from './FadeIn';


const SERVICES = [
  {
    number: '01',
    title: 'AI/LLM Developement',
    description:
      'Fine-tuning large language models, prompt engineering, an building AI-powered applications using Tensorflow, Keras, and modern AI frameworks.',
  },
  {
    number: '02',
    title: 'Full-Stack Web Development',
    description:
      'Developing scalable, responsive web applications with React, Node.js, Express.js, MongoDB and REST APIs.',
  },
  {
    number: '03',
    title: 'Machine Learning Solutions',
    description:
      'Designing, Training, and optimizing machine learning and deep learning models for real-world prediction and classification tasks.',
  },
  {
    number: '04',
    title: 'Backend API Development',
    description:
      'Building secure backend systems with authentication, database integration, cloud storage, and efficient API architecture.',
  },
  {
    number: '05',
    title: 'Data Processing and AI Automation',
    description:
      'Creating data preprocessing pipelines, AI workflows, and automation solutions to improve model performance and productivity.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
