export default function FAQItem({ question, answer }) {
  return (
    <div class="bg-surface-container-low rounded-xl p-5 space-y-2">
      <div class="flex items-center gap-2 text-on-surface font-headline font-semibold text-base">
        <span class="material-symbols-outlined text-primary text-xl">
          help_outline
        </span>
        <span>{question}</span>
      </div>
      <p class="font-body text-xs sm:text-sm text-on-surface-variant pl-7 leading-relaxed">
        {answer}
      </p>
    </div>
  );
}
