YELLOW=\033[33m
RESET=\033[0m

install build:
	@$(MAKE) backend-install
	@$(MAKE) frontend-install

up start:
	@$(MAKE) backend-up
	@$(MAKE) frontend-up

stop:
	@$(MAKE) backend-stop
	@$(MAKE) frontend-stop

down:
	@$(MAKE) backend-down
	@$(MAKE) frontend-down

ps status:
	@$(MAKE) backend-ps
	@$(MAKE) frontend-ps

restart:
	@$(MAKE) backend-restart
	@$(MAKE) frontend-restart

migrate:
	@$(MAKE) backend-migrate

test:
	@$(MAKE) backend-test

backend-install backend-build:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend build

backend-up backend-start:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend up

backend-stop:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend stop

backend-down:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend down

backend-ps backend-status:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend ps

backend-restart:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend restart

backend-migrate:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend migrate

backend-test:
	@echo "$(YELLOW)[BACKEND]$(RESET)"
	@$(MAKE) -C backend test

frontend-install frontend-build:
	@echo "$(YELLOW)[FRONTEND]$(RESET)"
	@$(MAKE) -C frontend build

frontend-up frontend-start:
	@echo "$(YELLOW)[FRONTEND]$(RESET)"
	@$(MAKE) -C frontend up

frontend-stop:
	@echo "$(YELLOW)[FRONTEND]$(RESET)"
	@$(MAKE) -C frontend stop

frontend-down:
	@echo "$(YELLOW)[FRONTEND]$(RESET)"
	@$(MAKE) -C frontend down

frontend-ps frontend-status:
	@echo "$(YELLOW)[FRONTEND]$(RESET)"
	@$(MAKE) -C frontend ps

frontend-restart:
	@echo "$(YELLOW)[FRONTEND]$(RESET)"
	@$(MAKE) -C frontend restart

frontend-feature:
	@echo "$(YELLOW)[FRONTEND]$(RESET)"
	@$(MAKE) -C frontend feature


