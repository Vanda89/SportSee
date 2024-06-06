import PropTypes from 'prop-types';
import calorieIcon from '../../assets/icons/calorie.png';
import proteinIcon from '../../assets/icons/protein.png';
import carbohydrateIcon from '../../assets/icons/carbohydrate.png';
import lipidIcon from '../../assets/icons/lipid.png';
import { formatNutritionInfos } from '../../data/formatData';

/**
 * NutritionItem component.
 * @param {string} props.className - Style CSS of the component.
 * @param {Object} props.icon - Imported image object for the component.
 * @param {(string|number)} props.value - Value of the component.
 * @param {string} props.label - Label of the component.
 * @param {string} props.bgColor - Background color of the icon.
 * @returns {JSX.Element} Rendered component instance.
 */
function NutritionItem({ className, icon, value, label, bgColor }) {
  return (
    <div
      className={`profile-${className} flex items-center gap-5 w-full lg:w-96 xl:w-64 2xl:w-96 h-31 bg-gray-50 p-8 rounded-md`}
    >
      <img className={`px-5.5 py-5 ${bgColor} rounded-md`} src={icon} alt="" />
      <div>
        <p className="text-custom-slate-800">{value}</p>
        <p className="text-custom-slate-500">{label}</p>
      </div>
    </div>
  );
}

NutritionItem.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

/**
 * NutritionCards component.
 * @param {Object} props.nutritionInfos - Nutrition information.
 * @returns {JSX.Element} Rendered component instance.
 */
function NutritionCards({ nutritionInfos }) {
  /**
   * Data formatted with value and unit.
   * @type {Object}
   * @property {number} calorieCount - Calorie count.
   * @property {number} proteinCount - Protein count.
   * @property {number} carbohydrateCount - Carbohydrate count.
   * @property {number} lipidCount - Lipid count.
   */
  const formattedNutritionInfos = formatNutritionInfos(nutritionInfos);

  return (
    <aside className="profile-activity-resume flex flex-wrap xl:flex-nowrap xl:flex-col gap-10 font-bold justify-center lg:justify-between w-full lg:w-auto">
      <NutritionItem
        className="calories"
        icon={calorieIcon}
        value={formattedNutritionInfos.calorieCount}
        label="Calories"
        bgColor="bg-red-100"
      />
      <NutritionItem
        className="protein"
        icon={proteinIcon}
        value={formattedNutritionInfos.proteinCount}
        label="Proteines"
        bgColor="bg-blue-100"
      />
      <NutritionItem
        className="carbohydrates"
        icon={carbohydrateIcon}
        value={formattedNutritionInfos.carbohydrateCount}
        label="Glucides"
        bgColor="bg-yellow-100"
      />
      <NutritionItem
        className="lipids"
        icon={lipidIcon}
        value={formattedNutritionInfos.lipidCount}
        label="Lipides"
        bgColor="bg-pink-100"
      />
    </aside>
  );
}

NutritionCards.propTypes = {
  nutritionInfos: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
};

export default NutritionCards;
