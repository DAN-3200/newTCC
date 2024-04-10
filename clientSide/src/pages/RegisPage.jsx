import './RegisPage.scss'

export default function RegisPage() {
	return (
		<>
			<div className='container'>
				<div className='form-img'>
					<img
						src="{{ url_for('static', filename = 'img/To-do.png') }}"
						width='100%'
						alt=''
					/>
				</div>
				<div className='form'>
					<form action='' method='POST'>
						<div className='form-header'>
							<div className='title'>
								<h1>Cadastre-se</h1>
							</div>
						</div>
						<div className='input-group'>
							<div className='input-box'>
								<span>Nome</span>
								<input className='boxInput input' type='text' />
							</div>
							<div className='input-box'>
								<span>Email</span>
								<input className='boxInput input' type='text' />
							</div>
							<div className='input-box'>
								<span>Senha</span>
								<input className='boxInput input' type='text' />
							</div>
							<div className='input-box'>
								<span>Confirmar Senha</span>
								<input className='boxInput input' type='text' />
							</div>
						</div>
						<div className='continue-button'>
							<button type='submit' className='continue'>
								continue
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
